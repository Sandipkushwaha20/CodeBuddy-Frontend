import Theme from "./Theme"


const Navbar = () => {
  return (
    <div className="navbar bg-base-400" data-theme="wireframe">
    <div className="flex-1" >
        <div  className="flex items-center gap-2 ml-2">
            <div className="w-10 rounded-full">
            <img
                alt="Tailwind CSS Navbar component"
                src="../public/image/Logo 1.png"/>
            </div>
        <a className=" text-xl font-bold">CodeBuddy</a>
        </div>
    </div>
    <div className="flex-none gap-2">
        <Theme/>
        {/* <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div> */}
        <div className="dropdown dropdown-end mr-2">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
            <a className="justify-between">
                Profile
                <span className="badge">New</span>
            </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar
