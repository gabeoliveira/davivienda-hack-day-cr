export interface LanguageOption {
  locale_code: string;
  language?: string;
  ttsProvider?: string;
  ttsLanguage?: string;
  voice?: string;
  transcriptionProvider?: string;
  transcriptionLanguage?: string;
  speechModel?: string;
}

export const languageOptions: { [key: string]: LanguageOption } = {
  
  portuguese: {
    locale_code: "pt-BR",
    ttsProvider: "Elevenlabs",
    ttsLanguage: "pt-BR",
    voice: "Eric-flash_v2_5",
    transcriptionProvider: "Deepgram",
    transcriptionLanguage: "pt-BR",
    speechModel: "nova-2-general",
  },
  spanish: {
    locale_code: "es-ES",
    ttsProvider: "ElevenLabs",
    voice: "x5IDPSl4ZUbhosMmVFTk", //"Lucia-Generative", // "", //"Lucia-Generative", ///"es-US-Journey-F",
    transcriptionProvider: "Deepgram",
    transcriptionLanguage: 'es',
    speechModel: "nova-2-general",

  },
  english: {
    locale_code: "en-US",
    ttsProvider: "google",
    voice: "en-US-Journey-O",
    transcriptionProvider: "google",
    speechModel: "telephony",
  },
};

// Other examples of language options:
//   'hi-IN': 'hi-IN-Wavenet-A',
//   'fr-FR': 'fr-FR-Journey-F',
//   'cmn-CN': 'cmn-CN-Wavenet-A',
