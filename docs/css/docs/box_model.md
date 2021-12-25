# 盒子模型

## 外边距

margin 可以设置上、右、下、左的外边距，可以设为 auto，元素会在其容器中水平居中；还可以设为 inherit 边距继承自父元素。

外边距合并：当两个垂直外边距相遇时，合并后的外边距的高度为两个外边距中的较大者。当一个元素包含在另一个元素中时，上下外边距也会发生合并；如果一个元素内容为空，上下外边距碰到了一起也会合并。

## 内边距

padding 属性用于在任何定义的边界内的元素周围生成空间。

通过 width 属性指定元素内容区域的宽度，包含内边距、外边距、边框，如果元素有指定的宽度，则添加到该元素的内边距会添加到元素的总宽度中。或者使用 `box-sizing` 属性，使元素保持其宽度。

## 高度和宽度

height 和 width 用于设置元素的高度和宽度，不包括内边距、外边距、边框，它设置的是元素内边距、外边距以及边框内的区域的高度或宽度。

## 盒子模型

所有 HTML 元素都可以视为方框。

- 内容：框的内容，显示文本和图像。
- 内边距：清除内容周围的区域，内边距是透明的。
- 边框：围绕内边距和内容的边框。
- 外边距：清除边界外的区域，外边距是透明的。

元素的总宽度应该这样计算：

元素总宽度 = 宽度 + 左内边距 + 右内边距 + 左边框 + 右边框 + 左外边距 + 右外边距。

元素的总高度应该这样计算：

元素总高度 = 高度 + 上内边距 + 下内边距 + 上边框 + 下边框 + 上外边距 + 下外边距。