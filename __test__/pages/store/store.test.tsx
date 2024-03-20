import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Store from "@/pages/store";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Store Component", () => {
  it("renders header", () => {
    render(
      <Provider store={store}>
        <Store />
      </Provider>
    );
    expect(screen.getByRole("heading", { name: "Header" })).toBeInTheDocument();
  });

  it("redirects to home page if userToken is missing", async () => {
    const mockRouterPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });

    render(
      <Provider store={store}>
        <Store />
      </Provider>
    );

    await waitFor(() => expect(mockRouterPush).toHaveBeenCalledWith("/"));
  });

  it("displays product count and price counter", async () => {
    jest.mock("@/redux/hook", () => ({
      useAppSelector: jest.fn(() => ({
        products: [
          { id: 1, price: 10 },
          { id: 2, price: 20 },
        ],
        productsRepeat: [
          { id: 1, price: 10 },
          { id: 2, price: 20 },
        ],
      })),
    }));

    render(
      <Provider store={store}>
        <Store />
      </Provider>
    );

    await waitFor(() =>
      expect(
        screen.getByText("تعداد نوع کالا های انتخواب شده :")
      ).toHaveTextContent("2")
    );
    await waitFor(() =>
      expect(
        screen.getByText("تعداد تمامی کالا های انتخواب شده :")
      ).toHaveTextContent("2")
    );
    await waitFor(() =>
      expect(screen.getByText("فاکتور نهایی :")).toHaveTextContent("30 $")
    );
  });

  it("displays when no products are available", async () => {
    jest.mock("@/redux/hook", () => ({
      useAppSelector: jest.fn(() => ({
        products: [],
        productsRepeat: [],
      })),
    }));

    render(<Store />);

    await waitFor(() =>
      expect(screen.getByText("کالایی یافت نشد !")).toBeInTheDocument()
    );
  });

  it("displays error message if productsRepeat is empty", async () => {
    jest.mock("@/redux/hook", () => ({
      useAppSelector: jest.fn(() => ({
        products: [
          { id: 1, price: 10 },
          { id: 2, price: 20 },
        ],
        productsRepeat: [],
      })),
    }));

    render(
      <Provider store={store}>
        <Store />
      </Provider>
    );

    await waitFor(() =>
      expect(screen.getByText("کالایی یافت نشد !")).toBeInTheDocument()
    );
  });
});
