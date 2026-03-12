import {
    Plugin,
    Protyle,
} from "siyuan";
import "./index.scss";

export default class PluginSample extends Plugin {
    async onload() {
        // 添加斜杠命令
        this.protyleSlash = [
            // 一对 Q&A 对话气泡（放在一个超级块中）
            {
                filter: [
                    "chat qa",
                    "qa",
                    "对话问答",
                    "dhwd"
                ],
                html: `<div class="b3-list-item__first"><span class="b3-list-item__text">${this.i18n.chatPairTitle}</span><span class="b3-list-item__meta">${this.i18n.chatPairMeta}</span></div>`,
                id: "chatQA",
                callback: (protyle: Protyle) => {
                    const idSuper = window.Lute.NewNodeID();
                    const idA = window.Lute.NewNodeID();
                    const idAPara = window.Lute.NewNodeID();
                    const idQ = window.Lute.NewNodeID();
                    const idQPara = window.Lute.NewNodeID();
                    
                    protyle.insert(`<div data-node-id="${idSuper}" data-type="NodeSuperBlock" class="sb" updated="${idSuper.split('-')[0]}" custom-chat-pair-container="true"><div data-node-id="${idA}" data-type="NodeBlockquote" class="bq" updated="${idA.split('-')[0]}" custom-chat-pair="true"><div data-node-id="${idAPara}" updated="${idAPara.split('-')[0]}" data-type="NodeParagraph" class="p"><div contenteditable="true" spellcheck="false"></div><div class="protyle-attr" contenteditable="false">​</div></div><div class="protyle-attr" contenteditable="false">​</div></div><div data-node-id="${idQ}" data-type="NodeBlockquote" class="bq" updated="${idQ.split('-')[0]}" custom-chat-pair-left="true"><div data-node-id="${idQPara}" updated="${idQPara.split('-')[0]}" data-type="NodeParagraph" class="p"><div contenteditable="true" spellcheck="false"></div><div class="protyle-attr" contenteditable="false">​</div></div><div class="protyle-attr" contenteditable="false">​</div></div><div class="protyle-attr" contenteditable="false">​</div></div>`, true);
                }
            },
            // 单独的尾尖朝右的气泡（Q 问题）
            {
                filter: [
                    "chat pair right",
                    "question",
                    "对话气泡右",
                    "dhqpy"
                ],
                html: `<div class="b3-list-item__first"><span class="b3-list-item__text">${this.i18n.chatPairRightTitle}</span><span class="b3-list-item__meta">${this.i18n.chatPairRightMeta}</span></div>`,
                id: "chatPairRight",
                callback: (protyle: Protyle) => {
                    const idBq = window.Lute.NewNodeID();
                    const idPara = window.Lute.NewNodeID();
                    protyle.insert(`<div data-node-id="${idBq}" data-type="NodeBlockquote" class="bq" updated="${idBq.split('-')[0]}" custom-chat-pair="true"><div data-node-id="${idPara}" updated="${idPara.split('-')[0]}" data-type="NodeParagraph" class="p"><div contenteditable="true" spellcheck="false"></div><div class="protyle-attr" contenteditable="false">​</div></div><div class="protyle-attr" contenteditable="false">​</div></div>`, true);
                }
            },
            // 单独的尾尖朝左的气泡（A 回答）
            {
                filter: [
                    "chat pair left",
                    "answer",
                    "对话气泡左",
                    "dhqpz"
                ],
                html: `<div class="b3-list-item__first"><span class="b3-list-item__text">${this.i18n.chatPairLeftTitle}</span><span class="b3-list-item__meta">${this.i18n.chatPairLeftMeta}</span></div>`,
                id: "chatPairLeft",
                callback: (protyle: Protyle) => {
                    const idBq = window.Lute.NewNodeID();
                    const idPara = window.Lute.NewNodeID();
                    protyle.insert(`<div data-node-id="${idBq}" data-type="NodeBlockquote" class="bq" updated="${idBq.split('-')[0]}" custom-chat-pair-left="true"><div data-node-id="${idPara}" updated="${idPara.split('-')[0]}" data-type="NodeParagraph" class="p"><div contenteditable="true" spellcheck="false"></div><div class="protyle-attr" contenteditable="false">​</div></div><div class="protyle-attr" contenteditable="false">​</div></div>`, true);
                }
            }
        ];
    }
}
