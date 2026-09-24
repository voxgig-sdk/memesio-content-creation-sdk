"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemesioContentCreationError = void 0;
class MemesioContentCreationError extends Error {
    isMemesioContentCreationError = true;
    sdk = 'MemesioContentCreation';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.MemesioContentCreationError = MemesioContentCreationError;
//# sourceMappingURL=MemesioContentCreationError.js.map