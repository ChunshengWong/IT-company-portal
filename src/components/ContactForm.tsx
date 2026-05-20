import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          {t('contact.form.submit')}
        </h3>
        <p className="text-green-700">
          {t('contact.subtitle')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('contact.form.placeholder.name')}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('contact.form.placeholder.email')}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
            {t('contact.form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('contact.form.placeholder.phone')}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
            {t('contact.form.company')}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={t('contact.form.placeholder.company')}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('contact.form.placeholder.message')}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none resize-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        {t('contact.form.submit')}
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}
