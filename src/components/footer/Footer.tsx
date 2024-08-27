import { FooterBar } from "./FooterBar";
import "./style.css";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer>
      <FooterBar />

      <hr />

      <div>
        <p className="license_info">
          Цей сайт представлений як демонстрація власних робіт автора. Не можна реально забронювати номери в готелях через цей сайт.
          {/* This site is presented as a demonstration of the author's own works. It is not possible to actually book hotel rooms through it. */}
        </p>
      </div>
    </footer>
  );
};
