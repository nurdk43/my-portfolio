// Sosyal Medya Linkleri Bileşeni

import { Github, Linkedin, Mail } from 'lucide-react'

export const SocialLinks = ({ sosyalMedya, email, variant = 'icon' }) => {
  // Text modu - footer için
  if (variant === 'text') {
    const socialLinks = []

    if (sosyalMedya?.github) {  // link varsa göster,yoksa gösterme
      socialLinks.push(
        <a key="github" href={sosyalMedya.github} target="_blank" rel="noopener noreferrer" className="sosyal-medya-text-link">
          GitHub
        </a>
      )
    }

    if (sosyalMedya?.linkedin) {
      socialLinks.push(
        <a key="linkedin" href={sosyalMedya.linkedin} target="_blank" rel="noopener noreferrer" className="sosyal-medya-text-link">
          LinkedIn
        </a>
      )
    }

    if (email) {
      socialLinks.push(
        <a key="email" href={`mailto:${email}`} className="sosyal-medya-text-link">
          Email
        </a>
      )
    }

    return (
      <div className="sosyal-medya-text">
        {socialLinks.map((link, index) => (
          <span key={index}>
            {link}
            {index < socialLinks.length - 1 && ' | '}
          </span>
        ))}
      </div>
    )
  }

  // Icon modu - varsayılan
  return (
    <div className="sosyal-medya">
      {sosyalMedya?.github && (
        <a href={sosyalMedya.github} target="_blank" rel="noopener noreferrer" className="sosyal-buton" aria-label="GitHub">
          <Github className="sosyal-ikon" />
        </a>
      )}
      {sosyalMedya?.linkedin && (
        <a href={sosyalMedya.linkedin} target="_blank" rel="noopener noreferrer" className="sosyal-buton" aria-label="LinkedIn">
          <Linkedin className="sosyal-ikon" />
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`} className="sosyal-buton" aria-label="Email">
          <Mail className="sosyal-ikon" />
        </a>
      )}
    </div>
  )
}
