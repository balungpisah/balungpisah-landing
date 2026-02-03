import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029VbC5I453bbUxYbQdPS2i';

export function WhatsAppChannelCTA() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card border-border rounded-2xl border p-8 text-center sm:p-10">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/15">
            <MessageCircle size={32} className="text-[#25D366]" />
          </div>

          {/* Title */}
          <h2 className="text-foreground mb-3 text-2xl font-bold sm:text-3xl">
            Ikuti Perkembangan Terbaru
          </h2>

          {/* Description */}
          <p className="text-muted-foreground mb-8 text-base leading-relaxed">
            Gabung Channel WhatsApp BalungPisah untuk mendapatkan informasi terbaru seputar gerakan
            ini.
          </p>

          {/* CTA Button */}
          <a href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#25D366] px-8 py-6 text-base font-semibold text-white hover:bg-[#1da851]">
              <MessageCircle size={20} className="mr-2" />
              Gabung Channel WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
