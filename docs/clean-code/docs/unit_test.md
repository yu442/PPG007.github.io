# 单元测试

## TDD 三定律

- 定律一：在编写不能通过的单元测试前，不可编写生产代码。
- 定律二：只可编写刚好无法通过的单元测试，不能编译也算。
- 定律三：只可编写刚好足以通过当前失败测试的生产代码。

## 整洁的测试

整洁测试要具有可读性，明确、简洁、有表达力。

三个环节：构造测试数据——操作测试数据——检验操作结果。

## 每个测试一个断言

在每个测试方法中使用断言语句可以将测试归结为一个可快速方便地理解的结论。

每个测试方法只测试一个含义。

## F.I.R.S.T

- F：测试应该够快。
- I：测试应该相互独立，某个测试不应为下一个测试设定条件。
- R：测试应当可以在任何环境中重复通过。
- S：测试应该有布尔值输出，测试应该自足验证。
- T：测试应该及时编写，恰好在其通过的生产代码之前编写。