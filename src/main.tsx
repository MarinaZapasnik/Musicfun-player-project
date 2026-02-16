import { createRoot } from "react-dom/client"
import { Footer } from "./components/Footer.tsx"
import { Header } from "./components/Header.tsx"
import { PageTitle } from "./components/PageTitle.tsx"
import { SidebarMenu } from "./components/SidebarMenu.tsx"
import { TrackDetail } from "./components/TrackDetail.tsx"
import { TrackList } from "./components/TrackList.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(<MainPage />)

function MainPage() {
  return (
    <div>
      <Header />
      <SidebarMenu />
      <PageTitle />
      <div style={{display:'flex', gap:'80px'}}>
        <TrackList />
        <TrackDetail />
      </div>

      <Footer />
    </div>
  )
}
