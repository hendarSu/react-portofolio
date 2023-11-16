import GlobalContext from '@/contexts/GlobalContext';
import Project from '@/pages/project';
import { render, screen } from '@testing-library/react';

const customRender = (component, {providerProps, ...renderOption }) => {
    return render(
        <GlobalContext.Provider {...providerProps}>
            {component}
        </GlobalContext.Provider>,
        renderOption
    )
}

describe("Page Project", () => {
    it("[+] renders page project", () => {
        // render component page project
        const providerProps = {
            value : {
                isLogin : true
            }
        }
        customRender(<Project />, { providerProps });

        const titleProject = screen.getByRole('heading', {
            name: 'Our Projects'
        });

        expect(titleProject).toBeInTheDocument();
    })
})