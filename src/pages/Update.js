const Update = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  updateUser,


}) => {
  return (
    <div className="bg-[#111111] text-gray-300 min-h-[500px] flex flex-col justify-start pt-24 items-center">
      <h1 className="text-5xl font-semibold pb-10">Edit</h1>

      <form onSubmit={updateUser} className="flex flex-col gap-6 justify-center items-center relative">
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
          className="w-[400px] px-4 py-2 rounded-md bg-gray-800 border-none outline-none"
        />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          value={lastName}
          onChange={(e) => {setLastName(e.target.value)}}
          className="w-[400px] px-4 py-2 rounded-md bg-gray-800 border-none outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          className="w-[400px] px-4 py-2 rounded-md bg-gray-800 border-none outline-none"
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-[400px] px-4 py-2 rounded-md bg-gray-800 border-none outline-none"
        />

        <button
          className="bg-sky-800 hover:bg-sky-700 text-lg text-white px-6 py-2 rounded-md"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
