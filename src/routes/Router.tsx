import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { FormStep1 } from '../pages/FormStep1/FormStep1'
import { FormStep2 } from '../pages/FormStep2/FormStep2'
import { FormStep3 } from '../pages/FormStep3/FormStep3'
import { FormStep4 } from '../pages/FormStep4/FormStep4'

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<FormStep1 />} />
            <Route path="/step2" element={<FormStep2 />} />
            <Route path="/step3" element={<FormStep3 />} />
            <Route path="/step4" element={<FormStep4 />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router