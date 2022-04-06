import express from 'express';
import { createDonation, deleteAllDonations, deleteDonation, getAllDonations, getDonation } from '../controller/donation.js';

const router = express.Router();

router.get('/:id', getDonation);

router.get('/', getAllDonations);

router.post('/', createDonation);

router.delete('/:id', deleteDonation);

router.delete('/', deleteAllDonations);

export default router;