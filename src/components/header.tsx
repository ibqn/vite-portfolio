import Logo from '@/assets/logo.svg'

export const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>

          <button className="btn btn-sm"> Work with me</button>
        </div>
      </div>
    </div>
  )
}
