import { fetchData } from './getdata';
import fetch from 'node-fetch';

jest.mock('node-fetch');

describe('fetchData function', () => {
  it('fetches data from an API', async () => {
    const mockResponse = {
      ok: true,
      text: jest.fn().mockResolvedValue('{"id": 1, "title": "Mocked Title"}'),
    };
    (fetch as jest.Mock).mockResolvedValue(mockResponse as Response);

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    const response = await fetchData(apiUrl);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(apiUrl);
  });

  it('handles invalid URL gracefully', async () => {
    const mockResponse = {
      ok: false,
      status: 404,
      text: jest.fn().mockResolvedValue('Not Found'),
    };
    (fetch as jest.Mock).mockResolvedValue(mockResponse as Response);

    const apiUrl = 'invalid-url';
    const response = await fetchData(apiUrl);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(apiUrl);
  });
});
