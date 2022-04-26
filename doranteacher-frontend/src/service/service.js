import axios from 'axios';

const OCR_API_BASE_URL = 'http://localhost:8080/';

class OcrService {
	getEmotions() {
		return axios.get(OCR_API_BASE_URL);
	}
}

export default new OcrService();
