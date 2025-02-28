import { MapPin, Phone } from 'lucide-react'
import React from 'react'

const ContactInformation = () => {
  return (
    <>
       <div className="w-40 px-1 py-2 rounded-lg shadow-xl">
            <h3 className="text-center text-xl font-bold text-green-400">
              Conatct
            </h3>
          </div>
          <div className="lg:p-4 p-2 space-y-4 bg-secon *:text-white rounded-lg">
            <div className="flex items-center gap-2">
              <span className="flex items-center lg:text-xl font-semibold gap-2 lg:w-32 w-24">
                <MapPin className="w-5 h-5" />
                Address
              </span>
              <span>:</span>
              <span className="lg:font-medium">
                Flat-1, 34/B, Oriental Harmony, Dhanmondi 5
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center lg:text-xl font-semibold gap-2 lg:w-32 w-24">
                <Phone className="w-5 h-5" />
                Hotline
              </span>
              <span>:</span>
              <span className="lg:font-medium">+880 1329485901</span>
            </div>
          </div>  
    </>
  )
}

export default ContactInformation
