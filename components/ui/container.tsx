
interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className="max-w-7xl mx-auto">
        {children}
    </section>
  )
}

export default Container