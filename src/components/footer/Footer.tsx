import { FooterBar } from "./FooterBar";
import "./style.css";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer>
      <FooterBar />

      <hr />

      <div className="license_info">
        <p>
          This site is presented as a demonstration of the author's own works. It is not possible to actually book hotel rooms through it.
        </p>
      </div>
    </footer>
  );
};
