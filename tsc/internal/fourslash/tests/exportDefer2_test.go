package fourslash_test

import (
	"testing"

	"github.com/microsoft/TypeScript/tsc/internal/fourslash"
	"github.com/microsoft/TypeScript/tsc/internal/ls/lsutil"
	"github.com/microsoft/TypeScript/tsc/internal/lsp/lsproto"
	"github.com/microsoft/TypeScript/tsc/internal/testutil"
)

func TestExportDefer2(t *testing.T) {
	t.Parallel()
	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `export defer { b } from "./b" with { type: "a" };
export defer { a } from "./a" with { type: "a" };
export defer { c } from "./a" with { type: "b" };
export defer { d } from "./a";
export defer { e } from "./a" with { type: "a" };
export { f } from "./a" with { type: "a" };
export type { I } from "./a" with { type: "a" };
export defer * as g from "./a" with { type: "a" };
void 0;`
	f, done := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	defer done()
	f.VerifyOrganizeImports(
		t,
		`export defer * as g from "./a" with { type: "a" };
export { f } from "./a" with { type: "a" };
export type { I } from "./a" with { type: "a" };
export defer { a, e } from "./a" with { type: "a" };
export defer { c } from "./a" with { type: "b" };
export defer { d } from "./a";
export defer { b } from "./b" with { type: "a" };
void 0;`,
		lsproto.CodeActionKindSourceSortImportsTs,
		&lsutil.UserPreferences{OrganizeImportsSort: lsutil.OrganizeImportsSortOrdinalIgnoreCase},
	)
}
