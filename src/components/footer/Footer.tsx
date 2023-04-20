import { FooterBar } from "./FooterBar";
import "./style/style.css";
import './style/adaptive.css'

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer>
      <FooterBar />

      <hr />

      <div className="license_info">
        <p>
          IP Trukhmeneva S.V. OGRIP 307345905700016 certificate dated February
          26, 2007, series 34 No. 003020722
        </p>
      </div>
    </footer>
  );
};
