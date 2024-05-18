import { web } from "./application/web.js";
import { logger } from "./application/logging.js";

const PORT = 3000;

web.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});