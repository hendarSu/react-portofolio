import CardItem from "@/components/CardItem";
import { render, screen } from "@testing-library/react";
import dataMocks from "../../__mocks__/dataMocks";

describe("CardItem Component", () => {
    it("[+] renders component carditem", () => {
        const item = dataMocks.page.home.dataFeature;
        render(<CardItem 
                name={item.name}
                cover={item.cover}
                summary={item.summary}
                link={item.link}
            />)

        const cover = screen.getByRole('img', {
            value: item.cover
        });
        expect(cover).toBeInTheDocument();
        // TODO: PR 1 - Testing untuk name, summary dan link
    })
})