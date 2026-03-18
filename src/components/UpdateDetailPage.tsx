import { useEffect } from 'react';
import './UpdateDetailPage.css';
import type { UpdateCategory } from './updatesData';

interface UpdateDetailPageProps {
  category: UpdateCategory;
  onClose: () => void;
}

const UpdateDetailPage = ({ category, onClose }: UpdateDetailPageProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div className="udp-overlay" role="dialog" aria-modal="true" aria-label={category.title}>
      <div className="udp-backdrop" onClick={onClose} />
      <div className="udp-panel">
        <div className="udp-header">
          <div className="udp-header__content">
            <span className="udp-eyebrow">Updates</span>
            <h1 className="udp-title">{category.title}</h1>
            <p className="udp-description">{category.description}</p>
          </div>
          <button className="udp-close" onClick={onClose} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="udp-body">
          <ul className="udp-articles" role="list">
            {category.articles.map((article, i) => (
              <li key={i} className="udp-article">
                <div className="udp-article__meta">
                  <span className="udp-article__date">{article.date}</span>
                  {article.tag && <span className="udp-article__tag">{article.tag}</span>}
                </div>
                <h3 className="udp-article__title">{article.title}</h3>
                <p className="udp-article__summary">{article.summary}</p>
              </li>
            ))}
          </ul>

          <div className="udp-disclaimer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p>Updates are for informational purposes. Contact us for official guidance on any regulatory change.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDetailPage;
