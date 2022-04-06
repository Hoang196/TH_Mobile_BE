import { DonationModel } from "../model/DonationModel.js";

export const getAllDonations = async (req, res, next) => {
    try {
        const donations = await DonationModel.find({ status: "available" });

        res.status(200).json(donations);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const getDonation = async (req, res, next) => {
    try {
        const donationId = req.params.id;
        console.log(donationId);
        const donation = await DonationModel.findOne({ _id: donationId, status: "available" });

        res.status(200).json(donation);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const createDonation = async (req, res, next) => {
    try {
        const newDonation = req.body;
        const donation = new DonationModel(newDonation);
        await donation.save();
        res.status(200).json({
            status_code: 200,
            detail: "Thêm donate thành công!"
        });

    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const deleteDonation = async (req, res, next) => {
    try {
        const id = req.params.id;
        await DonationModel.findByIdAndUpdate(id, {
            status: "unavailable",
        });

        res.status(200).json({
            status_code: 200,
            detail: "Xóa donate thành công!"
        });
    } catch (err) {
        res.status(500).json({ detail: "Xóa donate không thành công!" });
    }
}

export const deleteAllDonations = async (req, res, next) => {
    try {
        await DonationModel.updateMany({
            status: "unavailable",
        });

        res.status(200).json({
            status_code: 200,
            detail: "Xóa donate thành công!"
        });
    } catch (err) {
        res.status(500).json({ detail: "Xóa donate không thành công!" });
    }
}

