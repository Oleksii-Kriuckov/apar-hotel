import "./style.css";

type Props = {};

const SuccessBooking = (props: Props) => {
    return (
        <div className="success_booking">
            <p className="m-0">
                Ви успішно забронювали цю комнату
            </p>
        </div>
    );
};

export default SuccessBooking;