const notifications = [
  "Punjab vs Rajasthan",
  "Afghanistan A vs Ireland A",
  "Bangladesh vs West Indies",
];

const NotificationBar = () => (
  <section className="bg-red-900 py-2 rounded-[3px] overflow-hidden shadow-md">
    <div className="flex items-center overflow-hidden">
      <div className="flex-shrink-0 flex items-center bg-white bg-opacity-20 rounded-full p-1 mx-2">
        <span className="text-white text-xs font-medium">🏏</span>
      </div>
      <div className="marquee relative overflow-hidden w-full">
        <div className="marquee-content flex gap-5 animate-marquee">
          {notifications.map((notification, index) => (
            <span
              key={index}
              className="text-white text-sm whitespace-nowrap bg-red-400 px-2 py-1 rounded-3xl"
            >
              {notification}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NotificationBar;