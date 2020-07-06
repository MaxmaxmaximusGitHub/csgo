export const MarketContext = React.createContext()


export default function MarketProvider({children}) {
  const [opened, setOpened] = useState(false)

  const value = {
    opened,

    open() {
      setOpened(true)
    },

    close() {
      setOpened(false)
    }
  }

  return <MarketContext.Provider value={value}>
    {children}
  </MarketContext.Provider>
}


