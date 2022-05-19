import { FormattedMessage } from "react-intl";

function GiftcardConfirmation() {
  return (
    <div>
      <p>
        <FormattedMessage
          id="giftcard.thanks"
          defaultMessage="Tak for dit køb og for at støtte vores virksomhed!"
        />
      </p>

      <p>
        <FormattedMessage
          id="giftcard.promise"
          defaultMessage="Gavekortet sendes på mail nu."
        />
      </p>
      <img />
    </div>
  );
}

export default GiftcardConfirmation;
