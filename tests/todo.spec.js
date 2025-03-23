import { mount } from "@vue/test-utils";
import Todo from "@/pages/todo.vue";
import { beforeEach, describe, expect, it } from "vitest";

describe("Todo.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Todo);
  });

  it("renders correctly", () => {
    expect(wrapper.find("h1").text()).toBe("To-Do List");
  });

  it("adds a new task", async () => {
    const input = wrapper.find("input");
    const button = wrapper.find("button");

    await input.setValue("New Task");
    await button.trigger("click");

    expect(wrapper.vm.tasks).toHaveLength(1);
    expect(wrapper.vm.tasks[0].text).toBe("New Task");
  });

  it("completes a task", async () => {
    wrapper.vm.tasks.push({ text: "Task 1", completed: false });
    await wrapper.vm.toggleTask(0);

    expect(wrapper.vm.tasks[0].completed).toBe(true);
    expect(wrapper.find("span").classes()).toContain("line-through");
  });

  it("deletes a task", async () => {
    wrapper.vm.tasks.push({ text: "Task 1", completed: false });
    await wrapper.vm.deleteTask(0);

    expect(wrapper.vm.tasks).toHaveLength(0);
  });

  it("does not add an empty task", async () => {
    const input = wrapper.find("input");
    const button = wrapper.find("button");

    await input.setValue("");
    await button.trigger("click");

    expect(wrapper.vm.tasks).toHaveLength(0);
  });
});
