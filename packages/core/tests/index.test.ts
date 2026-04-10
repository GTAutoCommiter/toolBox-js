import { describe, expect, it, vi } from "vitest";
import { debounce } from "../src";

describe("debounce", () => {
  it("should debounce function calls", () => {
    vi.useFakeTimers();
    const cb = vi.fn();
    const debounced = debounce(cb, 100);

    debounced();
    debounced();
    debounced();

    expect(cb).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100);
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
