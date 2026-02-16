'use client';

import { Mail, Phone } from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const email = 'farhnmh@gmail.com';
const phone = '085216000342';
const whatsappPhone = '6285216000342';

const emailSubject = 'Hello Farhan';
const emailBody = 'Hi Farhan,%0D%0A%0D%0AI would like to discuss...%0D%0A%0D%0ABest regards';
const whatsappMessage = 'Hi Farhan,%0AI would like to discuss...';

const ContactSection = () => {
  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <Typography variant="subtitle" className="max-w-2xl text-center text-sm md:text-base px-4">
          {"What's next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect."}
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-16 px-4 md:px-0">
        {/* Contact Cards */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Email Card */}
          <div className="flex flex-col items-center gap-3 md:gap-4 p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border border-blue-100 dark:border-slate-700 transition-all hover:shadow-lg">
            <div className="p-2.5 md:p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <Typography variant="subtitle" className="text-center font-semibold text-sm md:text-base">
              Email
            </Typography>
            <button
              onClick={() => window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
              className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-medium text-sm md:text-base transition-all hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-95"
            >
              Send Email
            </button>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center gap-3 md:gap-4 p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900 border border-green-100 dark:border-slate-700 transition-all hover:shadow-lg">
            <div className="p-2.5 md:p-3 rounded-full bg-green-100 dark:bg-green-900/30">
              <Phone className="h-5 w-5 md:h-6 md:w-6 text-green-600 dark:text-green-400" />
            </div>
            <Typography variant="subtitle" className="text-center font-semibold text-sm md:text-base">
              WhatsApp
            </Typography>
            <button
              onClick={() => window.location.href = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`}
              className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg bg-green-600 dark:bg-green-500 text-white font-medium text-sm md:text-base transition-all hover:bg-green-700 dark:hover:bg-green-600 active:scale-95"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-4 md:gap-6 p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 w-full max-w-2xl">
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <Typography variant="h3" className="text-center text-base md:text-lg">
              Connect with me
            </Typography>
            <Typography variant="body2" className="text-center text-slate-600 dark:text-slate-400 text-xs md:text-sm">
              You may also find me on these platforms!
            </Typography>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
