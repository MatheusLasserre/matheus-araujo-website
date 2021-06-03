import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from '../../styles/FloatingIcon.module.css'


function FloatingIcon() {
    return (
        <div>
            <div className={Icon.iconWrap}>
                <p className={Icon.text}>Problemas no pagamento? Fale conosco no WhatsApp!</p>
            <div className={Icon.floating}>
                <Link href="http://wa.me/+5581985692190?text=Oi,%20estava%20na%20página%20do%20redescobrindo%20os%20clássicos%20e%20tive%20problemas%20com%20o%20pagamento!">
                <Image
                    src="/icons/whatsapp-icon.png"
                    height={40}
                    width={40}
                />
                </Link>
            </div>
            </div>
        </div>
    )
}

export default FloatingIcon
