const User=require("../Models/user")


async function handleGetAllUser(req,res){
    const allDbUsers = await User.find({});

  const html = `<ul>
  ${allDbUsers.map((user) => `<li>${user.first_name} _ ${user.email}</li>`).join("")}
  </ul>`;
  return res.send(html);

}


async function handleGetAllApiUser(req,res) {
  const allDbUsers = await User.find({});
  //custom header
  //   console.log(req.headers);

  //Always add X to customm headers
  res.setHeader("X-name", "manan");
  return res.json(allDbUsers);
}


async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ msg: " user not found" });
    }
    return res.json(user);
  }
  
  
  async function handleUpdateUserById(req,res) {
      // const id = Number(req.params.id);
      // const user = users.find((user) => user.id === id);
      // const data = req.body;
      // Object.assign(user, data);
      // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), () => {
      //   return res.json({ status: "send", user });
      // });
  
      const data = req.body;
      await User.findByIdAndUpdate(req.params.id, { ...data });
      return res.json({ status: "send" });
    }
    
    async function handleDeleteUserById(req,res) {
    // const id = Number(req.params.id);
    // const user = users.findIndex((user) => user.id === id);
    // const deleted = users.splice(user, 1);
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), () => {
    //   return res.json({ status: "send", user: deleted[0] });
    // });

    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "send" });
  }
  
  async function handleAddUser(req,res)  {
  const data = req.body;
  if (
    !data ||
    !data.first_name ||
    !data.last_name ||
    !data.job_title ||
    !data.gender ||
    !data.email
  ) {
    return res.status(400).json({ msg: "all fields required ... " });
  }
  //   users.push({ ...data, id: users.length + 1 });
  //   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), () => {
  //     return res.status(201).json({ status: "send", id: users.length });
  //   });

  //USE DB for POST
  const result = await User.create({ ...data });

  return res.status(201).json({ status: "success",userId:result._id });
}



module.exports={
    handleGetAllUser,
    handleGetAllApiUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleAddUser

}