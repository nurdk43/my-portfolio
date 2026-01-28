import { SocialLinks } from '../ui/SocialLinks.jsx'
import profileData from '../../data/profile.json'

export const Footer = () => {
  return (
    <footer className="alt-bolum">
      <div className="alt-icerik">
        <p className="alt-metin">© {profileData.name} 🩷</p>
        <SocialLinks sosyalMedya={profileData.social} email={profileData.email} variant="text" />
      </div>
    </footer>
  )
}

