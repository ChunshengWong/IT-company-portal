import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                {t('contact.form.name')}
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                {t('contact.info.title')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {t('contact.info.address')}
                    </h3>
                    <p className="text-text-secondary">
                      {t('contact.info.addressValue')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {t('contact.info.phone')}
                    </h3>
                    <p className="text-text-secondary">
                      {t('contact.info.phoneValue')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {t('contact.info.email')}
                    </h3>
                    <p className="text-text-secondary">
                      {t('contact.info.emailValue')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {t('contact.info.hours')}
                    </h3>
                    <p className="text-text-secondary">
                      {t('contact.info.hoursValue')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>地图位置</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
