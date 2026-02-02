import { BookerEmbed } from "@calcom/atoms";

export default function Booker() {
  return (
    <BookerEmbed
      username="abhishek-patel-ujjhlo"
      eventSlug="45min"
      view="month_view"
      onCreateBookingSuccess={() => {
        console.log("Booking created successfully");
      }}
      customClassNames={{
        bookerContainer: "border border-neutral-300 rounded-xl",
      }}
    />
  );
}
