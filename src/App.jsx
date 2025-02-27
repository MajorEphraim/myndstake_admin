import RouterComp from './router/Router'
import { DocumentationsProvider } from './context/DocumentationsContext'
import { PaymentsProvider } from './context/PaymentsContext'
import { ContentProvider } from './context/ContentContext'
import { AuthProvider } from './context/AuthContext'
import { AccountProvider } from './context/AccountContext'
import { GenresProvider } from './context/GenresContext'
import { DrawerProvider } from './context/DrawerContext'

function App() {
  return (
    <AuthProvider>
      <AccountProvider>
        <DocumentationsProvider>
          <PaymentsProvider>
            <ContentProvider>
              <GenresProvider>
                <DrawerProvider>
                  <RouterComp/>
                </DrawerProvider>
              </GenresProvider>
            </ContentProvider>
          </PaymentsProvider>
        </DocumentationsProvider>
      </AccountProvider>
    </AuthProvider>
  )
}

export default App
