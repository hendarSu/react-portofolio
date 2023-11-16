import Home from '@/pages'
import { render, screen } from '@testing-library/react'
import { dataFeature, page } from '../../__mocks__/dataMock'
import CardItem from '@/components/CardItem'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: page.home.heading,
        })

        const desc = screen.getByText(page.home.description);

        expect(heading).toBeInTheDocument()
        expect(desc).toBeInTheDocument()
    })

    it("renders a component Feature", () => {
        render(<CardItem 
            name={dataFeature.name} 
            cover={dataFeature.cover} 
            summary={dataFeature.summary} 
            link={dataFeature.link} />)

        const cover = screen.getByRole("img", {
            value: dataFeature.cover
        });

        expect(cover).toBeInTheDocument();

        const cardTitle = screen.getByRole("heading", {
            name: dataFeature.name
        });

        expect(cardTitle).toBeInTheDocument();

        const cardText = screen.getByText(dataFeature.summary);
        expect(cardText).toBeInTheDocument();

        const link = screen.getByRole("link", {
            value: dataFeature.link
        })
        expect(link).toBeInTheDocument();
    })
})