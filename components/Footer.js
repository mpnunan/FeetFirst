/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer-body">
      <footer>
        <div>Connect with us! &nbsp;&nbsp;
          <img src="/gmail-icon.png" alt="gmail-icon" />
          &nbsp;
          &nbsp;
          <img src="/fb-icon.png" alt="facebook-icon" />
          &nbsp;
          &nbsp;
          <img src="/instagram-icon.png" alt="instagram-icon" />
          &nbsp;
          &nbsp;
          <img src="/linkedin-icon.png" alt="linked-icon" />
          &nbsp;
          &nbsp;
          <a href="https://github.com/mpnunan/FeetFirst">
            <img src="/github-icon.png" alt="github-icon" />
          </a>
        </div>
        <hr />
        {`| Copyright © Feet First ${year} | NSS Nashville, TN |`}
      </footer>
    </div>
  );
}
