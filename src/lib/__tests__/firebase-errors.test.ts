import { describe, it, expect, vi } from "vitest";

// Mock firebase modules before importing
vi.mock("firebase/app", () => ({
  initializeApp: vi.fn(() => ({})),
}));
vi.mock("firebase/auth", () => ({
  getAuth: vi.fn(() => ({ currentUser: null })),
}));
vi.mock("firebase/firestore", () => ({
  getFirestore: vi.fn(() => ({})),
}));

import { handleFirestoreError, OperationType } from "../firebase-errors";

describe("firebase-errors", () => {
  it("OperationType has expected values", () => {
    expect(OperationType.CREATE).toBe("create");
    expect(OperationType.UPDATE).toBe("update");
    expect(OperationType.DELETE).toBe("delete");
    expect(OperationType.LIST).toBe("list");
    expect(OperationType.GET).toBe("get");
    expect(OperationType.WRITE).toBe("write");
  });

  it("handleFirestoreError throws with structured error info", () => {
    const error = new Error("permission-denied");
    expect(() =>
      handleFirestoreError(error, OperationType.CREATE, "leads")
    ).toThrow();
  });

  it("handleFirestoreError includes operation type and path in error", () => {
    try {
      handleFirestoreError(
        new Error("test error"),
        OperationType.GET,
        "users/123"
      );
    } catch (e) {
      const parsed = JSON.parse((e as Error).message);
      expect(parsed.operationType).toBe("get");
      expect(parsed.path).toBe("users/123");
      expect(parsed.error).toBe("test error");
    }
  });
});
