import { FooterBar } from "./FooterBar";
import "./style/style.css";
import "./style/adaptive.css";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer>
      <FooterBar />

      <hr />

      <div className="license_info">
        <p>
          ИП Трухменева С.В. ОГРИП 307345905700016 свидетельство от 26.02.2007
          года серия 34 № 003020722
        </p>
      </div>
    </footer>
  );
};
