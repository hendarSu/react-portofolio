import Project from '@/pages/project'
import { render, screen } from '@testing-library/react'
import { page } from '../../../__mocks__/dataMock'
import GlobalContext from '@/contexts/GlobalContext'
jest.mock('next/router', () => require('next-router-mock'));

const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
        <GlobalContext.Provider {...providerProps}>
            {ui}
        </GlobalContext.Provider>,
        renderOptions,
    )
}

describe('Page Project', () => {
    it("renders a heading", () => {
        const providerProps = {
            value: {
                isLogin: true
            }
        }

        customRender(<Project />, { providerProps })
        const heading = screen.getByRole('heading', {
            name: page.project.heading
        })

        expect(heading).toBeInTheDocument();
    })
})