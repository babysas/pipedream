import common from "../common/common.mjs";

export default {
  ...common,
  key: "clickup-new-list",
  name: "New List",
  description: "Emit new event when a new list is created",
  version: "0.0.1",
  dedupe: "unique",
  type: "source",
  methods: {
    ...common.methods,
    _getMeta({ listId: listId }) {
      return {
        id: listId,
        summary: listId,
        ts: Date.now(),
      };
    },
    _getEventsList() {
      return [
        "listCreated",
      ];
    },
  },
  async run(httpRequest) {
    this.checkSignature(httpRequest);
    this.$emit(httpRequest.body, this._getMeta(httpRequest.body));
  },
};