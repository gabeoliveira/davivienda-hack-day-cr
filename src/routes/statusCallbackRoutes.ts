import express, { Request, Response } from 'express';
import { initiateRecording } from '../controllers/callController';

const router = express.Router();

router.post('/status-callback', async (req: Request, res: Response) => {
  try {
    console.log("Call Data:", req.body);
    if (req.body.CallStatus === 'in-progress') {
        const recordingDetails = await initiateRecording(req.body.CallSid);
        res.type('text/xml');
        console.log('Incoming call', recordingDetails);
        res.status(200).send(recordingDetails);
      }
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to process incoming call' });
  }
});

export default router;
