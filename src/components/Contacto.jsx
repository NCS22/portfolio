import contact from '../data/contact.json';

function Contacto() {
    const { fullName, email, phone, location } = contact;

    return (
        <section className="contact" id="contacto">
            <h2 className="contact-title">Contacto</h2>
            <p className="contact-desc">¿Hablamos? Estas son mis vías de contacto.</p>

            <div className="contact-card">
                <div className="contact-item">
                    <span className="contact-label">Nombre Completo</span>
                    <span className="contact-value">{fullName}</span>
                </div>

                <div className="contact-item">
                    <span className="contact-label">Email</span>
                    <a className="contact-value contact-link" href={`mailto:${email}`}>
                        {email}
                    </a>
                </div>

                <div className="contact-item">
                    <span className="contact-label">Teléfono</span>
                    <a className="contact-value contact-link" href={`tel:${phone.replace(/\s/g, '')}`}>
                        {phone}
                    </a>
                </div>

                <div className="contact-item">
                    <span className="contact-label">Ubicación</span>
                    <span className="contact-value">{location}</span>
                </div>
            </div>
        </section>
    );
}

export default Contacto;