import { useState } from 'react'
import PageWrapper from '../components/PageWrapper.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Eyebrow, SectionTitle, SectionSub } from '../components/Heading.jsx'

const CERTS = [
  { cat: 'Cisco', title: 'Networking Basics', issuer: 'Cisco Networking Academy' },
  { cat: 'Cisco', title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy' },
  { cat: 'Workshop', title: 'Frontend Web Development', issuer: 'Online Workshop Series' },
  { cat: 'Seminar', title: 'Intro to Network Security', issuer: 'Campus Seminar' },
]

export default function Certificates() {
  const [modal, setModal] = useState(null)

  return (
    <PageWrapper>
      <Reveal>
        <Eyebrow>Certificates</Eyebrow>
        <SectionTitle>Courses, workshops &amp; seminars.</SectionTitle>
        <SectionSub>Click any card for details.</SectionSub>
      </Reveal>

      <Reveal stagger className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4.5">
        {CERTS.map((cert) => (
          <div
            key={cert.title}
            tabIndex={0}
            onClick={() => setModal(cert)}
            onKeyDown={(e) => e.key === 'Enter' && setModal(cert)}
            className="bg-surface border border-border rounded-card p-5 cursor-pointer transition-all hover:-translate-y-1 hover:border-accent"
          >
            <div className="font-mono text-[11px] text-accent2 uppercase tracking-[0.1em] mb-2">{cert.cat}</div>
            <div className="font-semibold text-sm mb-1">{cert.title}</div>
            <div className="text-muted text-xs">{cert.issuer}</div>
          </div>
        ))}
      </Reveal>

      {modal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[2000]"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-surface border border-border rounded-card p-8 max-w-[420px] w-[90%] text-center scale-100 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full mx-auto mb-4.5 flex items-center justify-center bg-surface-2 border border-border text-accent">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <path d="M8.5 14.5L7 21l5-2 5 2-1.5-6.5" />
              </svg>
            </div>
            <h3 className="font-display text-lg mb-1.5">{modal.title}</h3>
            <p className="text-muted text-[13px] mb-5">{modal.issuer}</p>
            <button
              onClick={() => setModal(null)}
              className="border border-border bg-transparent text-text px-5.5 py-2.5 rounded-lg text-[13px] transition-colors hover:border-accent hover:text-accent"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
