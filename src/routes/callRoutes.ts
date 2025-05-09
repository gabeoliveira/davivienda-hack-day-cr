import express, { Request, Response } from 'express';
import { handleIncomingCall, initiateRecording } from '../controllers/callController';

const router = express.Router();

router.post('/incoming-call', async (req: Request, res: Response) => {
  try {
    const callDetails = await handleIncomingCall(req.body);
    res.type('text/xml');
    console.log('Incoming call', callDetails);
    res.status(200).send(callDetails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to process incoming call' });
  }

  try{
    await initiateRecording(req.body.CallSid);
  }

  catch(error){
    console.log("Unable to start recording", error);
  }
});

export default router;
