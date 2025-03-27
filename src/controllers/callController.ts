import { CallDetails } from '../types';
import { config } from '../config';


export async function handleIncomingCall(callData: CallDetails): Promise<string> {
  // Validate and process incoming call
  if (!callData) {
    throw new Error('Invalid call data');
  }

  // Refer the ConversationRelay docs for a complete list of attributes - https://www.twilio.com/docs/voice/twiml/connect/conversationrelay#conversationrelay-attributes
  return `<Response>
              <Start>
                <Transcription intelligenceService="GA2eb7ec6ca8b0cfccd10729da662936d8" languageCode="pt-BR" inboundTrackLabel="OpenAI Assistant" outboundTrackLabel="Customer"/> 
              </Start>   
              <Connect action="https://${config.ngrok.domain}/api/action">
                    <ConversationRelay url="wss://${config.ngrok.domain}" dtmfDetection="true" interruptible="true" interruptByDtmf="true" welcomeGreeting="${config.twilio.welcomeGreeting}" ttsProvider="Elevenlabs" ttsLanguage="pt-BR" voice="Eric-flash_v2_5" transcriptionProvider="Deepgram" transcriptionLanguage="pt-BR"> 
                    </ConversationRelay>
              </Connect>
          </Response>`;
}
