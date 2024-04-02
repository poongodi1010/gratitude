function UserAvatar() {
  return (
    <div className="flex items-center gap-[1.2rem]">
      <img
        className="block  aspect-square w-[4rem] cursor-pointer rounded-full object-cover object-center outline outline-gray-600"
        src="default-user.jpg"
      />
    </div>
  );
}

export default UserAvatar;
