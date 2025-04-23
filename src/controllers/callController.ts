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
                <Transcription intelligenceService="${config.twilio.voiceIntelligenceSid}"
                  languageCode="es-MX" 
                  inboundTrackLabel="OpenAI Assistant"
                  outboundTrackLabel="Customer"
                  statusCallbackUrl="https://events.hookdeck.com/e/src_su8VnSes9EUDvIpR3fV01ywb/transcriptions"/> 
              </Start>   
              <Connect action="https://${config.ngrok.domain}/api/action">
                    <ConversationRelay url="wss://${config.ngrok.domain}" dtmfDetection="true" interruptible="true"
                      welcomeGreeting="${config.twilio.welcomeGreeting}"
                      ttsProvider="${config.languages.spanish.ttsProvider}"
                      ttsLanguage="${config.languages.spanish.locale_code}"
                      voice="${config.languages.spanish.voice}"
                      transcriptionProvider="${config.languages.spanish.transcriptionProvider}"
                      transcriptionLanguage="${config.languages.spanish.transcriptionLanguage}"> 
                    </ConversationRelay>
              </Connect>
          </Response>`;
}
